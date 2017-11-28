class TreehousesController < ApplicationController
  before_action :treehouses_params, only: [:index]

  def index
    @treehouses = Treehouse.where("location = ? AND capacity >= ?", params[:treehouses][:location], params[:treehouses][:guests_number])
  end

  private

  def treehouses_params
    params.require(:treehouses).permit(:capacity, :location, :checkin, :checkout)
  end
end
