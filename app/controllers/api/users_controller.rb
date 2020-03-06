class Api::UsersController < ApplicationController

    def show
        @user = User.find_by(id: params[:id])
        render 'api/users/show'
    end

    def create
        @user = User.new(user_params)
        
        if @user.save
            login(@user)
            # render the user's show page
            render '/api/users/show'
        else
            render json: @user.errors.full_messages, status: 422
            # render errors and sign up form
        end
    end

    def update
        @user = User.find_by(id: params[:id])

        if @user
            @user.update(user_params)
            #render user's show page
        else
            #render errors and edit profile form
            render json: @user.errors.full_messages, status: 422
        end

    end

    def destroy
        if current_user.delete
            #render splash page 
        else
            #render errors and user's show page
        end
    end

    private

    def user_params
        params.require(:user).permit(:email, :username, :formal_name, :password)
    end

end
