import os
import json
import pika
from dotenv import load_dotenv

load_dotenv()

def callback(ch, method, properties, body):
    try:
        message = json.loads(body)
        print(f" [x] Received {message}")
        
        ch.basic_ack(delivery_tag=method.delivery_tag)
    except Exception as e:
        print(f" [x] Error processing message: {e}")
        ch.basic_nack(delivery_tag=method.delivery_tag, requeue=False)

def main():
    connection = pika.BlockingConnection(
        pika.URLParameters(os.getenv("RABBITMQ_URL", "amqp://guest:guest@localhost:5672"))
    )
    channel = connection.channel()

    channel.queue_declare(queue='optimization_tasks', durable=True)

    channel.basic_qos(prefetch_count=1)
    channel.basic_consume(
        queue='optimization_tasks',
        on_message_callback=callback
    )

    print(' [*] Waiting for messages. To exit press CTRL+C')
    channel.start_consuming()

if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
        print('Interrupted')
        try:
            os._exit(0)
        except SystemExit:
            os._exit(0) 