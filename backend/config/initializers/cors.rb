Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'https://3000-sylviaboyani-clientflow-njm6dwc7omc.ws-eu118.gitpod.io'

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head],
      credentials: true
  end
end
