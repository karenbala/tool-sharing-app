Rails.application.routes.draw do
  root 'static_pages#index'
  devise_for :users
 
  get '/tools', to: "static_pages#index"
  get '/tools/:id', to: "static_pages#index"
  get '/users/:id', to: "static_pages#index"

  namespace :api do
    namespace :v1 do
      resources :tools, only: [:index, :show] do
        resources :requests, only: [:index, :create]
      end
      resources :users, only: [:show]
      post 'tools/search', to: 'tools#search'
      
      resources :users, only: [:show] do
        resources :tools, only: [:create]
      end
    end
  end
end
