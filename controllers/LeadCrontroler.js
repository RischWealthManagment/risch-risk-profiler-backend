const Lead = require("../models/Leadmodal");

const leadData = {
  addLead: async (req, res) => {
    try {
      const { name, email, mobile, age, pan, address, amount, portfolio } = req.body;
      let lowerLeadName = name.toLowerCase().replace(/ /g, "");
      let checkLead = await Lead.findOne({ email });
      if (checkLead) {
        return res.status(400).json({ status: false, msg: "This Email already exists" });
      }
      // create new lead
      newLead = new Lead({ name: lowerLeadName, email, mobile, age, pan, address, amount, portfolio });
      await newLead.save();
      res.json({ status: true, data: newLead, msg: "Lead Captured Successfully" });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ msg: err.message, msg: "Internal server error" });
    }
  },
};

module.exports = leadData;
