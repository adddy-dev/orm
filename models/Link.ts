// lib/models/Reputation.ts
import { Schema, Document, model, models, ObjectId } from 'mongoose'

type Link = {
   url: string
   keywords: string[]
}

export interface IReputation extends Document {
   user: ObjectId;
   email: string;
   instagram: Link[];
   google: Link[];
   twitter: Link[];
   brand: string;
   keywords: string;
   reddit: string;
}

const LinkSchema = new Schema<Link>({
   url: { type: String, required: true },
   keywords: { type: [String], default: [] },
})

const ReputationSchema = new Schema<IReputation>(
   {
      user: { type: Schema.Types.ObjectId, ref: 'User' },
      email: { type: String, required: true },
      instagram: { type: [LinkSchema], default: [] },
      google: { type: [LinkSchema], default: [] },
      twitter: { type: [LinkSchema], default: [] },
      brand: { type: String },
      keywords: { type: String },
      reddit: { type: String }, // for legacy support
   },
   { timestamps: true }
)

export default models.Reputation || model<IReputation>('Reputation', ReputationSchema)
