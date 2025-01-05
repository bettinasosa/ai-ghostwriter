import { Schema, model, Document } from "mongoose"

interface ITwitterAccount extends Document {
  twitterHandle: string
  accessToken: string
  refreshToken?: string
  // Add any other metadata (like niche, brand voice, etc.)
  niche: string
}

const TwitterAccountSchema = new Schema<ITwitterAccount>(
  {
    twitterHandle: { type: String, required: true },
    accessToken: { type: String, required: true },
    refreshToken: { type: String },
    niche: { type: String, required: true }
  },
  { timestamps: true }
)

export const TwitterAccount = model<ITwitterAccount>(
  "TwitterAccount",
  TwitterAccountSchema
)
