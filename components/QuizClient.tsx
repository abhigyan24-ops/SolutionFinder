"use client";

import { useState, useEffect } from "react";
import { Question } from "@/lib/quiz-data";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, AlertCircle, Clock, Award, ArrowRight, ArrowLeft } from "lucide-react";
import Certificate from "./Certificate";

interface QuizClientProps {
  chapterName: string;
  questions: Question[];
}

export default function QuizClient({ chapterName, questions }: QuizClientProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);
  
  // 20 minutes in seconds
  const [timeLeft, setTimeLeft] = useState(20 * 60); 

  // Certificate Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showCertificate, setShowCertificate] = useState(false);

  useEffect(() => {
    if (isFinished || timeLeft <= 0) {
      if (timeLeft <= 0 && !isFinished) {
        handleFinish();
      }
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, isFinished]);

  const handleSelectAnswer = (optionIndex: number) => {
    if (isFinished) return;
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: optionIndex,
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleFinish = () => {
    let currentScore = 0;
    questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctAnswer) {
        currentScore++;
      }
    });
    setScore(currentScore);
    setIsFinished(true);
  };

  const handleGenerateCertificate = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() !== "") {
      setShowCertificate(true);
    }
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  if (!questions || questions.length === 0) {
    return (
      <div className="p-8 text-center bg-gray-50 rounded-2xl border border-gray-200">
        <h3 className="text-xl font-bold text-gray-700 mb-2">Quiz not available yet.</h3>
        <p className="text-gray-500">We are currently preparing the questions for this chapter.</p>
      </div>
    );
  }

  const isPassed = score >= Math.ceil(questions.length * 0.8);

  if (isFinished) {
    return (
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-8 md:p-12 text-center border-b border-gray-100">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 mx-auto bg-blue-50 text-[#1a73e8]">
            <Award size={40} />
          </div>
          <h2 className="font-syne text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Quiz Completed!</h2>
          <div className="text-xl text-gray-600 mb-8">
            You scored <strong className="text-[#1a73e8] text-3xl mx-2">{score}</strong> out of {questions.length}
          </div>
          
          {isPassed ? (
            <div className="bg-green-50 text-green-800 p-6 rounded-2xl border border-green-200 inline-block text-left w-full max-w-lg mx-auto">
              <h3 className="font-bold text-xl mb-2 flex items-center gap-2">
                <CheckCircle2 className="text-green-600" />
                Congratulations!
              </h3>
              <p className="mb-6">You scored 80% or higher. You have earned a certificate for this chapter.</p>
              
              {!showCertificate ? (
                <form onSubmit={handleGenerateCertificate} className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Your Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Abhigyan"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Your Email</label>
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Used to verify authenticity"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none"
                    />
                  </div>
                  <button type="submit" className="w-full py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-colors">
                    Generate My Certificate
                  </button>
                </form>
              ) : (
                 <div className="text-center text-green-700 font-bold py-4">Certificate Generated! See below.</div>
              )}
            </div>
          ) : (
            <div className="bg-amber-50 text-amber-800 p-6 rounded-2xl border border-amber-200 inline-block text-left w-full max-w-lg mx-auto">
              <h3 className="font-bold text-xl mb-2 flex items-center gap-2">
                <AlertCircle className="text-amber-600" />
                Keep Practicing!
              </h3>
              <p>You need at least 80% to earn a certificate. Review the chapter videos and try again.</p>
            </div>
          )}
        </div>

        {/* Certificate Display Area */}
        {showCertificate && isPassed && (
          <div className="bg-gray-50 border-t border-gray-100 p-8">
            <Certificate name={name} chapterName={chapterName} score={score} total={questions.length} />
          </div>
        )}

        {/* Review Answers */}
        <div className="p-8 md:p-12 bg-gray-50">
          <h3 className="font-syne font-bold text-2xl text-gray-900 mb-8">Review Answers</h3>
          <div className="space-y-6">
            {questions.map((q, qIndex) => {
              const selected = selectedAnswers[qIndex];
              const isCorrect = selected === q.correctAnswer;
              
              return (
                <div key={q.id} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      {selected === undefined ? (
                         <AlertCircle className="text-gray-400" />
                      ) : isCorrect ? (
                        <CheckCircle2 className="text-green-500" />
                      ) : (
                        <XCircle className="text-red-500" />
                      )}
                    </div>
                    <div className="flex-grow">
                      <p className="font-medium text-gray-900 mb-4">{qIndex + 1}. {q.question}</p>
                      <div className="space-y-2">
                        {q.options.map((opt, optIndex) => {
                          const isThisSelected = selected === optIndex;
                          const isThisCorrect = q.correctAnswer === optIndex;
                          
                          let bgClass = "bg-gray-50 border-gray-200";
                          if (isThisCorrect) bgClass = "bg-green-50 border-green-200 text-green-800 font-medium";
                          else if (isThisSelected && !isThisCorrect) bgClass = "bg-red-50 border-red-200 text-red-800";
                          
                          return (
                            <div key={optIndex} className={`p-3 rounded-lg border ${bgClass} flex justify-between items-center`}>
                              <span>{opt}</span>
                              {isThisCorrect && <CheckCircle2 size={16} className="text-green-600" />}
                              {isThisSelected && !isThisCorrect && <XCircle size={16} className="text-red-600" />}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestionIndex];
  const hasSelected = selectedAnswers[currentQuestionIndex] !== undefined;

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Top Bar */}
      <div className="bg-gray-50 border-b border-gray-100 p-4 md:px-8 flex items-center justify-between">
        <div className="font-syne font-bold text-gray-500">
          Question {currentQuestionIndex + 1} of {questions.length}
        </div>
        <div className={`flex items-center gap-2 font-bold px-4 py-2 rounded-full ${timeLeft < 300 ? 'bg-red-100 text-red-700' : 'bg-white shadow-sm text-gray-700'}`}>
          <Clock size={18} className={timeLeft < 300 ? 'animate-pulse' : 'text-blue-500'} />
          {formatTime(timeLeft)}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-100 h-1">
        <div 
          className="bg-[#1a73e8] h-1 transition-all duration-300"
          style={{ width: `${((currentQuestionIndex) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question Area */}
      <div className="p-8 md:p-12 min-h-[400px] flex flex-col">
        <motion.div
          key={currentQuestionIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="flex-grow"
        >
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 leading-relaxed">
            {currentQuestionIndex + 1}. {currentQ.question}
          </h2>

          <div className="space-y-3">
            {currentQ.options.map((option, index) => {
              const isSelected = selectedAnswers[currentQuestionIndex] === index;
              return (
                <button
                  key={index}
                  onClick={() => handleSelectAnswer(index)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between group
                    ${isSelected 
                      ? 'border-[#1a73e8] bg-blue-50/50' 
                      : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                    }`}
                >
                  <span className={`font-medium ${isSelected ? 'text-[#1a73e8]' : 'text-gray-700 group-hover:text-gray-900'}`}>
                    {option}
                  </span>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors
                    ${isSelected ? 'border-[#1a73e8]' : 'border-gray-300'}
                  `}>
                    {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-[#1a73e8]" />}
                  </div>
                </button>
              );
            })}
          </div>
        </motion.div>
        
        {/* Navigation */}
        <div className="mt-12 flex items-center justify-between pt-6 border-t border-gray-100">
          <button
            onClick={handlePrev}
            disabled={currentQuestionIndex === 0}
            className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:hover:bg-transparent transition-colors"
          >
            <ArrowLeft size={18} />
            Previous
          </button>
          
          {currentQuestionIndex === questions.length - 1 ? (
             <button
              onClick={handleFinish}
              className="flex items-center gap-2 px-8 py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-all shadow-md hover:shadow-lg"
            >
              Finish Quiz
              <CheckCircle2 size={18} />
            </button>
          ) : (
            <button
              onClick={handleNext}
              className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold transition-all shadow-md hover:shadow-lg
                ${hasSelected 
                  ? 'bg-[#1a73e8] text-white hover:bg-blue-700' 
                  : 'bg-gray-200 text-gray-500 hover:bg-gray-300'
                }`}
            >
              Next
              <ArrowRight size={18} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
