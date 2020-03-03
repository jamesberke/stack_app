class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )

        if @user
            login(@user)
            #render user's show page
            render '/api/users/show'
        else
            #render errors and redirect to log in from, status: 404
            render json: ["Invalid credentials"], status: 422
        end
    end

    def destroy
        @user = current_user

        if @user
            logout
            #render splash page
        else
            #render errors 
        end
    end

end
