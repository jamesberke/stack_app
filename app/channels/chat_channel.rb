class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_from "room-#{params["room"]}:messages"
    
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
