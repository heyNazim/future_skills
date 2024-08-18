import cardModel from '../models/cardModel.js'


// Create Card Controller
export const createCard = async (req, res) => {
    try {
        const { title, description } = req.body

        if (!title || !description) {
            return res.status(200).send({
                success: false,
                message: "Please fill all input fields"
            })
        }

        const cards = await new cardModel({ title, description }).save()
        res.status(200).send({
            success: true,
            message: "Card created successfully",
            cards
        })

    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Somthing went wrong",
            error
        })
    }

}

// Get All card Controller
export const allCards = async (req, res) => {
    try {
        const allCards = await cardModel.find()
        if (allCards) {
            res.status(200).send({
                success: true,
                message: "All cards fetched successfully",
                cards: allCards
            })
        }
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Somthing went wrong",
            error
        })
    }

}

// Get Specifc card Controller
export const singleCard = async (req, res) => {
    try {

const card = await cardModel.find({_id: req.params.id})
if(card){
    res.status(200).send({
        success: true,
        message: "Card fetched successfully",
        card
    })
}
} catch (error) {
        res.status(500).send({
            success: false,
            message: "Somthing went wrong",
            error
        })
    }

}