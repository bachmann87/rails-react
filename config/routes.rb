Rails.application.routes.draw do
  namespace :v1, defaults: { format: 'json' } do
    get 'game', to: 'game#index'
  end
  namespace :v1, defaults: { format: 'json' } do
    post 'game', to: 'game#create'
  end
  get '*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end 
root 'static#index'
end
