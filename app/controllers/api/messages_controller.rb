class Api::MessagesController < ApplicationController
    before_action :require_logged_in

    def show
        @message = Message.includes(:user).find_by(id: params[:id])
        render 'api/messages/show'
    end

    def create
        @message = Message.new(message_params)
        @message.user_id = current_user.id

        if @message.save
            # render 'api/message/show'
            ActionCable
                .server
                .broadcast("room-#{@message.channel_id}:messages",
                message: {
                    id: @messsage.id,
                    body: @messsage.body,
                    userId: @messsage.userId,
                    channelId: @messsage.channelId,
                    createdAt: @messsage.createdAt,
                },
                user: {
                    id: current_user.id,
                    username: current_user.username
                }
            );
        else
            render json: @message.errors.full_messages, status: 422
        end
    end

    def update
        @message = Message.find_by(id: params[:id])

        if @message.update(message_params)
            render 'api/messages/show'
        else
            render json: @message.errors.full_messages
        end
    end

    private

    def message_params
        params.require(:message).permit(:body, :channel_id, :parent_id)
    end

end
