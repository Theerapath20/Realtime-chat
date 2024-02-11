import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      requires: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      requires: true,
    },
    message: {
      type: String,
      required: true,
    },
    // createAT , updateAt
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

export default Message
