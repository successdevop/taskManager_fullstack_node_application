const notFound = (req, res) => res.status(404).send("Oops Route not found...");

module.exports = notFound;
