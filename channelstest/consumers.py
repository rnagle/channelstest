import time

from channels.generic.websockets import JsonWebsocketConsumer


class ChannelsTestConsumer(JsonWebsocketConsumer):

    strict_ordering = False
    slight_ordering = False

    def connect(self, message, **kwargs):
        """
        Perform things on connection start
        """
        pass

    def receive(self, content, **kwargs):
        """
        Called when a message is received with decoded JSON content
        """
        time.sleep(content.get('sleep'))
        # Simple echo
        self.send({
            'status': 'success',
            'slept': content.get('sleep'),
            'id': content.get('id')
        })

    def disconnect(self, message, **kwargs):
        """
        Perform things on connection close
        """
        pass
