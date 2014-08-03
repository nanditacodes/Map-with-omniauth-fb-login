Rails.application.routes.draw do
  # get 'pages/public'
  #
  # get 'pages/private'

  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }

  resources :marker

  root to: 'marker#index'
  post 'marker/create' => 'marker#create', as: :create_marker
  delete '/session'=>'users/sessions#destroy', as: :destroy_user_session


end
