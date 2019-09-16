export const join = (req,res) => res.render("Join", {pageTitle:"Join"});
export const login = (req,res) => res.render("Login", {pageTitle:"Login"});
export const logout = (req,res) => res.render("Logout", {pageTitle:"logoute"});
export const users = (req,res) => res.render("Users", {pageTitle:"users"});
export const userDetail = (req,res) => res.render("UserDetail", {pageTitle:"userDetail"});
export const editProfile = (req,res) => res.render("Edit Profile", {pageTitle:"Edit Profile"});
export const changePassword = (req,res) => res.render("Change Password", {pageTitle:"Change Password"});