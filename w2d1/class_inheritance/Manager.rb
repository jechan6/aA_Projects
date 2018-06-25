require_relative "Employee"

class Manager < Employee

  def initialize(name, title, salary, boss, employees = [])
    super(name, title, salary, boss)
    @employees = employees
  end

  def bonus(multiplier)
    sum = 0
    employees.each {|employee| sum += employee.salary}
    sum * multiplier

  end

  private

  attr_reader :employees
end

if __FILE__ == $PROGRAM_NAME
  employee = Employee.new("David", "clerk", 10_000, "Darren")
  employee1 = Employee.new("Shawna", "TA", 12_000, "Darren")
  boss = Manager.new("Darren", "TA manager", 78_000, "Ned",
    [employee, employee1])
  p employee.bonus(3)

end
