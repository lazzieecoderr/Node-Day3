import Employee from "../Models/empSchema.js";

export const createEmployee = async (req, res) => {
  try {
    const newEmployee = new Employee(req.body);
    await newEmployee.save();
    res
      .status(200)
      .json({ message: "Employee added successfully", data: [newEmployee] });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error in create method" });
  }
};

export const getEmployeeDetail = async (req, res) => {
  try {
    const employee = await Employee.find();
    res
      .status(200)
      .json({ message: "data fetched successfully", data: employee });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error in getall method" });
  }
};

export const getEmployeeDetailById = async (req, res) => {
  try {
    const empId = req.params.id;
    const employee = await Employee.findById(empId);
    if (!employee) {
      return res.status(404).send("Employee Not Found");
    }
    res
      .status(200)
      .json({ message: "data fetched successfully", data: employee });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Internal Server Error in getbyid method" });
  }
};

export const editEmployee = async (req, res) => {
  try {
    const empId = req.params.id;
    const { Emp_FirstName, Emp_LastName, Emp_Email, Emp_Designation } =
      req.body;
    const result = await Employee.updateOne(
      { _id: empId },
      { Emp_FirstName, Emp_LastName, Emp_Email, Emp_Designation }
    );
    console.log(result);
    if (result.matchedCount == 0) {
      return res.status(404).send("Employee detail not found");
    }
    const updateEmp = await Employee.find({ _id: empId });
    res
      .status(200)
      .json({ message: "Employee Updated successfully", data: updateEmp });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error in put method" });
  }
};
