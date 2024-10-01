
import json
from channels.generic.websocket import AsyncWebsocketConsumer

class YourConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()  # Accept the WebSocket connection

    async def disconnect(self, close_code):
        pass  # Handle disconnection

    async def receive(self, text_data):
        data = json.loads(text_data)
        # Process the received message here

        # Optionally send a response back to the client
        await self.send(text_data=json.dumps({
            'message': 'Message received'
        }))
