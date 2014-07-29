Rails.application.routes.draw do
  resources :marker

  root to: 'marker#index'
  post 'marker/create' => 'marker#create', as: :create_marker


end
