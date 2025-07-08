"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import { FaGithub } from "react-icons/fa6"
import { Button } from "./ui/button"
import Link from "next/link";

export default function GitHubLoginButton() {
  const { status } = useSession();

  return status === "loading" ? null : (
    <>
      {status === "authenticated" ? (
        <Link href="#" onClick={() => signOut()} className='text-gray-300 hover:text-white'>
          Log out
        </Link>
      ) : (
        <Button variant="secondary" onClick={() => signIn("github")}>
          <FaGithub /> Log in with GitHub
        </Button>
      )}
    </>
  )
}
