import { NextRequest } from 'next/server'
import { getServerSession } from 'next-auth'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { authOptions } from '@/app/auth/[...nextauth]/route'
import { handleApiError, successResponse, ApiError } from '@/lib/api-utils'

const createTaskSchema = z.object({
  description: z.string().min(1),
  time: z.string().optional(),
})

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      throw new ApiError('Unauthorized', 401)
    }

    const tasks = await prisma.task.findMany({
      where: { userId: session.user.id },
      orderBy: { createdAt: 'desc' },
    })

    return successResponse(tasks)
  } catch (error) {
    return handleApiError(error)
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      throw new ApiError('Unauthorized', 401)
    }

    const json = await request.json()
    const data = createTaskSchema.parse(json)

    const task = await prisma.task.create({
      data: {
        ...data,
        userId: session.user.id,
      },
    })

    return successResponse(task, 201)
  } catch (error) {
    return handleApiError(error)
  }
}

export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      throw new ApiError('Unauthorized', 401)
    }

    const json = await request.json()
    const { id, ...data } = json

    if (!id) {
      throw new ApiError('Task ID is required')
    }

    const task = await prisma.task.findUnique({
      where: { id },
    })

    if (!task) {
      throw new ApiError('Task not found', 404)
    }

    if (task.userId !== session.user.id) {
      throw new ApiError('Unauthorized', 401)
    }

    const updatedTask = await prisma.task.update({
      where: { id },
      data,
    })

    return successResponse(updatedTask)
  } catch (error) {
    return handleApiError(error)
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      throw new ApiError('Unauthorized', 401)
    }

    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      throw new ApiError('Task ID is required')
    }

    const task = await prisma.task.findUnique({
      where: { id },
    })

    if (!task) {
      throw new ApiError('Task not found', 404)
    }

    if (task.userId !== session.user.id) {
      throw new ApiError('Unauthorized', 401)
    }

    await prisma.task.delete({
      where: { id },
    })

    return successResponse({ message: 'Task deleted successfully' })
  } catch (error) {
    return handleApiError(error)
  }
} 