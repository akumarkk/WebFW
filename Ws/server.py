import asyncio
import websockets

async def hello(websocket, path):
    try:
        # Receive and process messages from the client
        async for message in websocket:
            print(f"Received from client: {message}")
            # Process the message (e.g., send to other clients, perform actions)
            await websocket.send(f"Echo(server@8765): {message}") 

    except websockets.exceptions.ConnectionClosed:
        print("Client disconnected")

    name = await websocket.recv()
    print(f"< {name}")

    greeting = f"Hello, {name}!"

    await websocket.send(greeting)
    print(f"> {greeting}")

async def main():
    async with websockets.serve(hello, "localhost", 8765):
        await asyncio.Future()  # run forever

asyncio.run(main())