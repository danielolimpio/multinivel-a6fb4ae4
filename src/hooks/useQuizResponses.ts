import { useState, useEffect, useCallback } from 'react';

export interface QuizResponse {
  slug: string;
  selectedOptions: string[];
  level: 'iniciante' | 'intermediario' | 'avancado' | null;
  timestamp: number;
}

export interface QuizState {
  responses: Record<string, QuizResponse>;
  overallLevel: 'iniciante' | 'intermediario' | 'avancado';
  completedQuestions: number;
  email?: string;
}

const STORAGE_KEY = 'quiz_responses_2026';

const initialState: QuizState = {
  responses: {},
  overallLevel: 'iniciante',
  completedQuestions: 0,
};

function calculateOverallLevel(responses: Record<string, QuizResponse>): 'iniciante' | 'intermediario' | 'avancado' {
  const levels = Object.values(responses)
    .map(r => r.level)
    .filter((l): l is 'iniciante' | 'intermediario' | 'avancado' => l !== null);
  
  if (levels.length === 0) return 'iniciante';
  
  const counts = {
    iniciante: levels.filter(l => l === 'iniciante').length,
    intermediario: levels.filter(l => l === 'intermediario').length,
    avancado: levels.filter(l => l === 'avancado').length,
  };
  
  if (counts.avancado >= levels.length * 0.5) return 'avancado';
  if (counts.intermediario + counts.avancado >= levels.length * 0.5) return 'intermediario';
  return 'iniciante';
}

export function useQuizResponses() {
  const [state, setState] = useState<QuizState>(() => {
    if (typeof window === 'undefined') return initialState;
    
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (error) {
      console.error('Error loading quiz state:', error);
    }
    return initialState;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      console.error('Error saving quiz state:', error);
    }
  }, [state]);

  const saveResponse = useCallback((
    slug: string, 
    selectedOptions: string[], 
    level: 'iniciante' | 'intermediario' | 'avancado' | null
  ) => {
    setState(prev => {
      const newResponses = {
        ...prev.responses,
        [slug]: {
          slug,
          selectedOptions,
          level,
          timestamp: Date.now(),
        },
      };
      
      return {
        ...prev,
        responses: newResponses,
        overallLevel: calculateOverallLevel(newResponses),
        completedQuestions: Object.keys(newResponses).length,
      };
    });
  }, []);

  const getResponse = useCallback((slug: string): QuizResponse | undefined => {
    return state.responses[slug];
  }, [state.responses]);

  const setEmail = useCallback((email: string) => {
    setState(prev => ({ ...prev, email }));
  }, []);

  const resetQuiz = useCallback(() => {
    setState(initialState);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error('Error resetting quiz:', error);
    }
  }, []);

  const getAllResponses = useCallback(() => {
    return Object.values(state.responses).sort((a, b) => a.timestamp - b.timestamp);
  }, [state.responses]);

  return {
    state,
    saveResponse,
    getResponse,
    setEmail,
    resetQuiz,
    getAllResponses,
    overallLevel: state.overallLevel,
    completedQuestions: state.completedQuestions,
  };
}
