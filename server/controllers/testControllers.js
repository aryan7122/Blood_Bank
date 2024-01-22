const testController = (req, res) => {
    res.status(200).send({
        message: 'test router',
        success: true,
    })
}
module.exports = { testController };