import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: emailRegex,
    },
    name: { type: String, trim: true },
    password: { type: String, select: false },
    avatarUrl: { type: String },
    onboardingDone: { type: Boolean, default: false },
  },
  { timestamps: true },
);

userSchema.index({ email: 1 });

export type UserDocument = InferSchemaType<typeof userSchema>;

const User = (mongoose.models.User as Model<UserDocument>) ?? mongoose.model<UserDocument>("User", userSchema);

export default User;
