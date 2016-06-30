from channels import route_class
from channelstest import consumers


channel_routing = [
    route_class(consumers.ChannelsTestConsumer)
]
