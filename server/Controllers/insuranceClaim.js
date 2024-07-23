const Claim = require("../Models/insuranceClaimModel");

const FetchUserClaims = async (req, res) => {
    try {
        const userID = res.locals.payload.id;
        const claims = await Claim.find({ user: userID }).populate('policy');
        if (claims && claims.length > 0) {
            res.status(200).json(claims);
        }
        else {
            res.status(404).send('No Claims Found');
        }
    } catch (error) {
        res.status(500).send('Internal Server Error');
        throw error;
    }
};

const CreateClaim = async (req, res) => {
    try {
        const userID = res.locals.payload.id;
        req.body.user = userID;
        const claim = await Claim.create(req.body);
        if (claim) {
            res.status(200).send('Claim Created Successfully');
        }
        else {
            res.status(400).send('Failed to create claim');
        }
    } catch (error) {
        res.status(500).send('Internal Server Error');
        throw error;
    }
};

const UpateClaim = async (req, res) => {
    try {
        const userID = res.locals.payload.id;
        const claimID = req.params.claimID;
        req.body.user = userID;
        const updatedClaim = await Claim.findByIdAndUpdate(claimID, req.body, { new: true });
        if (updatedClaim) {
            res.status(200).send('Claim Updated Successfully');
        }
        else {
            res.status(400).send('Failed to update claim');
        }
    } catch (error) {
        res.status(500).send('Internal Server Error');
        throw error;
    }
};

const DeleteClaim = async (req, res) => {
    try {
        const claimID = req.params.claimID;
        const deletedClaim = await Claim.findByIdAndDelete(claimID);
        if (deletedClaim) {
            res.status(200).send('Claim Deleted Successfully');
        }
        else {
            res.status(400).send('Failed to delete claim');
        }
    } catch (error) {
        res.status(500).send('Internal Server Error');
        throw error;
    }
};

module.exports = {
    FetchUserClaims,
    CreateClaim,
    UpateClaim,
    DeleteClaim
};
