defmodule Fntn.UserView do
  use Fntn.Web, :view

  def render("index.json", %{users: users}) do
    %{data: render_many(users, Fntn.UserView, "user.json")}
  end

  def render("show.json", %{user: user}) do
    %{data: render_one(user, Fntn.UserView, "user.json")}
  end

  def render("user.json", %{user: user}) do
    %{id: user.id,
      username: user.username,
      email: user.email,
      password_hash: user.password_hash}
  end
end