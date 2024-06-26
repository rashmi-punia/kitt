import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  review: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});


const Review = mongoose.model("Review", reviewSchema);

export default Review;
