Rails.application.routes.draw do
  root 'static_pages#index'
  devise_for :users
 
  get '/tools', to: "static_pages#index"
  get '/trails/:id', to: "static_pages#index"

  namespace :api do
    namespace :v1 do
      resources :tools, only: [:index]
      post 'tools/search', to: 'tools#search'
      
    end
  end
end
