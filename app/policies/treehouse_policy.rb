class TreehousePolicy < ApplicationPolicy

  def create?
    true
  end

  def show?
    true
  end

  class Scope < Scope
    def resolve
      scope
    end
  end
end
