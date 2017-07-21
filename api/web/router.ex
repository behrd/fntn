defmodule Fntn.Router do
  use Fntn.Web, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", Fntn do
    pipe_through :api
  end
end
