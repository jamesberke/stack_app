Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :channels, only: [:index, :show, :create, :destroy]
    resources :memberships, only: [:create, :destroy]
    resources :messages, only: [:show, :index, :create, :update]
    resource :session, only: [:create, :destroy]
    resources :users, only: [:index, :show, :create, :update, :destroy]
  end

  mount ActionCable.server, at: '/cable'

end
