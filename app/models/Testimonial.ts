import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  testimonial: {
    type: String,
    required: true,
  },
  visaType: {
    type: String,
    enum: ["EB1A", "O1A", "EB2 NIW"],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Testimonial ||
  mongoose.model("Testimonial", testimonialSchema);
