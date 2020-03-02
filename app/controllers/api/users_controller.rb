class Api::UsersController < ApplicationController

    after_initialize :ensure_session_token, except: [:create]

    def create
        @user = User.new(user_params)

        if @user.save
            login(@user)
            # render the user's show page
        else
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
