Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

    namespace :api do
      resources :profiles, only: [:index, :update]
      get 'my_likes', to: 'profiles#my_likes'
  end
end



