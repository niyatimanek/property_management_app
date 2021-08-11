Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'properties/index'
      post 'properties/create'
      get 'properties/show/:id', to: 'properties#show'
      put 'properties/update/:id', to: 'properties#update'
      put 'properties/deactivate/:id', to: 'properties#deactivate'
    end
  end
  namespace :api do
    namespace :v1 do
      get 'users/index'
      post 'users/create'
      get 'users/show/:id', to: 'users#show'
      put 'users/update/:id', to: 'users#update'
      put 'users/deactivate/:id', to: 'users#deactivate'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
