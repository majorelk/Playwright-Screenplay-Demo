import { config } from 'dotenv';

config();

export const users = {
    standard: {
        username: process.env.USER_STANDARD_USERNAME,
        password: process.env.USER_STANDARD_PASSWORD,
    },
    lockedOut: {
        username: process.env.USER_LOCKED_OUT_USERNAME,
        password: process.env.USER_LOCKED_OUT_PASSWORD,
    },
    problem: {
        username: process.env.USER_PROBLEM_USERNAME,
        password: process.env.USER_PROBLEM_PASSWORD,
    },
    performanceGlitch: {
        username: process.env.USER_PERFORMANCE_GLITCH_USERNAME,
        password: process.env.USER_PERFORMANCE_GLITCH_PASSWORD,
    },
    error: {
        username: process.env.USER_ERROR_USERNAME,
        password: process.env.USER_ERROR_PASSWORD,
    },
    visual: {
        username: process.env.USER_VISUAL_USERNAME,
        password: process.env.USER_VISUAL_PASSWORD,
    }
};