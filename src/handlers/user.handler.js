export const getUser = (req, res) => {
    const users = []
  try {
    const { firstname, lastname } = req.body;
    users.push({
      firstname,
      lastname,
    });

    return res.status(200).json({ users });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "something went wrong" });
  }
};
