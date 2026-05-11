from fastapi import FastAPI
from pydantic import BaseModel
import pickle
import numpy as np
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Load pipeline
model = pickle.load(open("../model/spam_pipeline.pkl", "rb"))
print("Model type:", type(model))
print("TF-IDF vocab size:", len(model.named_steps['tfidf'].vocabulary_))
class EmailRequest(BaseModel):
    email: str

@app.post("/predict")
def predict(data: EmailRequest):

    prediction = model.predict([data.email])[0]
    probability = model.predict_proba([data.email])[0]

    result = "Spam" if prediction == 1 else "Not Spam"
    confidence = float(np.max(probability))

    return {
        "prediction": result,
        "confidence": round(confidence, 3)
    }