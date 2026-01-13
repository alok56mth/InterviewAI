// 200 Data Scientist Interview Questions - Statistics, Machine Learning, Python, SQL, Deep Learning
export const DATASCIENCE_QUESTIONS = {
    // Statistics & Probability (40)
    statistics: {
        easy: [
            "What is the difference between mean, median, and mode?",
            "What is standard deviation?",
            "What is a normal distribution?",
            "What is the difference between population and sample?",
            "What is variance?",
            "What is correlation and what does it measure?",
            "What is the difference between correlation and causation?",
            "What is a hypothesis test?",
            "What is a null hypothesis?",
            "What is a p-value?",
            "What is the difference between Type I and Type II errors?",
            "What is confidence interval?",
            "What is the Central Limit Theorem?",
        ],
        medium: [
            "Explain the difference between parametric and non-parametric tests.",
            "What is the difference between t-test and z-test?",
            "What is ANOVA and when would you use it?",
            "What is chi-square test?",
            "What is Bayes' theorem and how is it used?",
            "What is the difference between covariance and correlation?",
            "What is statistical significance?",
            "What is the law of large numbers?",
            "What is the difference between discrete and continuous distributions?",
            "What is a probability distribution function (PDF)?",
            "What is cumulative distribution function (CDF)?",
            "What is the difference between likelihood and probability?",
            "What is maximum likelihood estimation (MLE)?",
        ],
        hard: [
            "How do you handle multiple hypothesis testing?",
            "What is the Bonferroni correction?",
            "Explain A/B testing and its statistical foundations.",
            "What is power analysis in hypothesis testing?",
            "What is bootstrapping and when would you use it?",
            "What is the difference between Bayesian and Frequentist statistics?",
            "How do you detect and handle outliers statistically?",
            "What is kernel density estimation?",
            "What is the expectation-maximization algorithm?",
            "How do you validate statistical models?",
            "What is heteroscedasticity and how do you detect it?",
            "What is multicollinearity and how do you handle it?",
            "What is the difference between homoscedasticity and heteroscedasticity?",
            "How do you perform time series analysis?",
        ]
    },

    // Machine Learning (50)
    machineLearning: {
        easy: [
            "What is machine learning?",
            "What is the difference between supervised and unsupervised learning?",
            "What is a training set and test set?",
            "What is overfitting?",
            "What is underfitting?",
            "What is the bias-variance tradeoff?",
            "What is cross-validation?",
            "What is linear regression?",
            "What is logistic regression?",
            "What is a decision tree?",
            "What is k-nearest neighbors (KNN)?",
            "What is clustering?",
            "What is k-means clustering?",
            "What is the difference between classification and regression?",
            "What is feature engineering?",
        ],
        medium: [
            "Explain the difference between L1 and L2 regularization.",
            "What is gradient descent?",
            "What is the difference between batch and stochastic gradient descent?",
            "What is Random Forest?",
            "What is Gradient Boosting?",
            "What is XGBoost and why is it popular?",
            "What is Support Vector Machine (SVM)?",
            "What is the kernel trick in SVM?",
            "What is Principal Component Analysis (PCA)?",
            "What is dimensionality reduction?",
            "How do you handle imbalanced datasets?",
            "What is SMOTE?",
            "What is ensemble learning?",
            "What is the difference between bagging and boosting?",
            "What are precision, recall, and F1-score?",
            "What is ROC-AUC curve?",
            "What is confusion matrix?",
            "How do you handle missing data?",
            "What is feature selection and why is it important?",
            "What is the curse of dimensionality?",
        ],
        hard: [
            "How do you design a machine learning pipeline?",
            "What is hyperparameter tuning and what methods exist?",
            "What is GridSearchCV vs RandomizedSearchCV?",
            "How do you handle feature importance in tree-based models?",
            "What is model interpretability and why is it important?",
            "What is SHAP and how does it work?",
            "What is LIME for model explanation?",
            "How do you deploy machine learning models?",
            "What is model drift and how do you handle it?",
            "What is online learning?",
            "How do you handle high cardinality categorical variables?",
            "What is target encoding?",
            "How do you handle time series forecasting?",
            "What is ARIMA model?",
            "What is the difference between batch and real-time predictions?",
        ]
    },

    // Python for Data Science (35)
    pythonDS: {
        easy: [
            "What is NumPy and why is it used in data science?",
            "What is Pandas and its main data structures?",
            "What is the difference between Series and DataFrame?",
            "How do you read a CSV file in Pandas?",
            "How do you handle missing values in Pandas?",
            "What is Matplotlib used for?",
            "What is Seaborn and how is it different from Matplotlib?",
            "How do you filter data in Pandas?",
            "What is groupby in Pandas?",
            "How do you merge two DataFrames?",
            "What is the difference between loc and iloc?",
        ],
        medium: [
            "How do you optimize Pandas operations for large datasets?",
            "What is vectorization in NumPy?",
            "How do you handle datetime data in Pandas?",
            "What is the apply function in Pandas?",
            "How do you reshape data using pivot tables?",
            "What is the difference between merge, join, and concat?",
            "How do you handle memory issues with large datasets?",
            "What is Scikit-learn and its main modules?",
            "How do you create a machine learning pipeline in Scikit-learn?",
            "What is the difference between fit, transform, and fit_transform?",
            "How do you perform cross-validation in Scikit-learn?",
            "What is pickle and how is it used for saving models?",
        ],
        hard: [
            "How do you use Dask for parallel computing?",
            "What is the difference between Pandas and PySpark?",
            "How do you optimize Python code for data science?",
            "What is Cython and when would you use it?",
            "How do you create custom transformers in Scikit-learn?",
            "What is feature pipeline design pattern?",
            "How do you handle streaming data in Python?",
            "What is the difference between multiprocessing and multithreading?",
            "How do you profile Python code for performance?",
            "What is the GIL and how does it affect data science?",
            "How do you use generators for large dataset processing?",
            "What is lazy evaluation and its benefits?",
        ]
    },

    // SQL for Data Science (30)
    sqlDS: {
        easy: [
            "What is SQL and why is it important for data science?",
            "What is the difference between WHERE and HAVING?",
            "What are the different types of JOINs?",
            "What is GROUP BY?",
            "What is ORDER BY?",
            "What is the difference between INNER JOIN and LEFT JOIN?",
            "What are aggregate functions in SQL?",
            "What is a subquery?",
            "What is the difference between UNION and UNION ALL?",
            "How do you find duplicates in SQL?",
        ],
        medium: [
            "What are window functions in SQL?",
            "What is the difference between ROW_NUMBER, RANK, and DENSE_RANK?",
            "How do you calculate running totals in SQL?",
            "What is a Common Table Expression (CTE)?",
            "How do you handle NULL values in SQL?",
            "What is COALESCE function?",
            "How do you optimize SQL queries?",
            "What is indexing and how does it improve performance?",
            "What is the difference between clustered and non-clustered index?",
            "How do you pivot data in SQL?",
        ],
        hard: [
            "How do you write recursive CTEs?",
            "What is query execution plan?",
            "How do you optimize joins for large tables?",
            "What is partitioning in databases?",
            "How do you handle slowly changing dimensions?",
            "What is the difference between OLTP and OLAP?",
            "How do you design a data warehouse schema?",
            "What is star schema vs snowflake schema?",
            "How do you handle time-series data in SQL?",
            "What is database normalization and denormalization?",
        ]
    },

    // Deep Learning (30)
    deepLearning: {
        easy: [
            "What is deep learning?",
            "What is a neural network?",
            "What is an activation function?",
            "What is the difference between sigmoid, tanh, and ReLU?",
            "What is backpropagation?",
            "What is an epoch, batch, and iteration?",
            "What is the difference between deep learning and machine learning?",
            "What is TensorFlow?",
            "What is PyTorch?",
            "What is a loss function?",
        ],
        medium: [
            "What is a Convolutional Neural Network (CNN)?",
            "What is a Recurrent Neural Network (RNN)?",
            "What is LSTM and why is it used?",
            "What is dropout and why is it used?",
            "What is batch normalization?",
            "What is transfer learning?",
            "What is the vanishing gradient problem?",
            "What are optimizers like Adam, SGD, RMSprop?",
            "What is learning rate and how do you choose it?",
            "What is data augmentation?",
        ],
        hard: [
            "What is the architecture of ResNet?",
            "What is attention mechanism?",
            "What are Transformers and how do they work?",
            "What is BERT and how is it used?",
            "What is GPT architecture?",
            "How do you handle overfitting in deep learning?",
            "What is model pruning and quantization?",
            "How do you deploy deep learning models in production?",
            "What is federated learning?",
            "What are GANs and how do they work?",
        ]
    },

    // Data Engineering & Big Data (15)
    dataEngineering: {
        easy: [
            "What is ETL?",
            "What is the difference between data lake and data warehouse?",
            "What is Apache Spark?",
            "What is Hadoop?",
            "What is the difference between batch and stream processing?",
        ],
        medium: [
            "How does MapReduce work?",
            "What is Apache Kafka?",
            "How do you handle data quality issues?",
            "What is data pipeline architecture?",
            "What is the difference between Spark RDD and DataFrame?",
        ],
        hard: [
            "How do you design a real-time data pipeline?",
            "What is exactly-once processing in streaming?",
            "How do you handle late-arriving data?",
            "What is Delta Lake?",
            "How do you optimize Spark jobs?",
        ]
    }
};

export function getRandomDataScienceQuestions(
    technologies: string[],
    experienceLevel: string,
    count: number,
    usedQuestions: string[] = []
): Array<{ question: string, expectedTopics: string[], difficulty: 'easy' | 'medium' | 'hard' }> {
    const difficultyDistribution = {
        'fresher': { easy: 0.8, medium: 0.15, hard: 0.05 },
        'entry-level': { easy: 0.8, medium: 0.15, hard: 0.05 },
        'junior': { easy: 0.5, medium: 0.4, hard: 0.1 },
        'mid': { easy: 0.2, medium: 0.6, hard: 0.2 },
        'senior': { easy: 0.1, medium: 0.4, hard: 0.5 },
        'lead': { easy: 0.05, medium: 0.25, hard: 0.7 }
    };

    const level = experienceLevel.toLowerCase();
    const distribution = difficultyDistribution[level as keyof typeof difficultyDistribution] || difficultyDistribution['mid'];

    const easyCount = Math.round(count * distribution.easy);
    const mediumCount = Math.round(count * distribution.medium);
    const hardCount = count - easyCount - mediumCount;

    const allQuestions: Array<{ question: string, expectedTopics: string[], difficulty: 'easy' | 'medium' | 'hard' }> = [];

    const getQuestionsByDifficulty = (difficulty: 'easy' | 'medium' | 'hard', targetCount: number) => {
        const questions: Array<{ question: string, expectedTopics: string[], difficulty: 'easy' | 'medium' | 'hard' }> = [];

        technologies.forEach(tech => {
            const techKey = tech.toLowerCase().replace(/\s+/g, '').replace('.', '');

            // For Data Science, get from all categories
            if (techKey.includes('data') || techKey.includes('science') || techKey.includes('ml') || techKey.includes('machine') || techKey.includes('analytics')) {
                const allCategories = [
                    { key: 'statistics', topics: ['statistics', 'probability', 'data analysis'] },
                    { key: 'machineLearning', topics: ['machine learning', 'ml', 'algorithms'] },
                    { key: 'pythonDS', topics: ['python', 'pandas', 'numpy'] },
                    { key: 'sqlDS', topics: ['sql', 'database', 'queries'] },
                    { key: 'deepLearning', topics: ['deep learning', 'neural networks', 'ai'] },
                    { key: 'dataEngineering', topics: ['data engineering', 'big data', 'etl'] }
                ];

                allCategories.forEach(cat => {
                    const categoryQuestions = DATASCIENCE_QUESTIONS[cat.key as keyof typeof DATASCIENCE_QUESTIONS][difficulty];
                    categoryQuestions.forEach(question => {
                        if (!usedQuestions.includes(question)) {
                            questions.push({
                                question,
                                expectedTopics: cat.topics,
                                difficulty
                            });
                        }
                    });
                });
            } else if (techKey.includes('statistics') || techKey.includes('stats')) {
                const categoryQuestions = DATASCIENCE_QUESTIONS.statistics[difficulty];
                categoryQuestions.forEach(question => {
                    if (!usedQuestions.includes(question)) {
                        questions.push({ question, expectedTopics: ['statistics', 'probability'], difficulty });
                    }
                });
            } else if (techKey.includes('python') || techKey.includes('pandas') || techKey.includes('numpy')) {
                const categoryQuestions = DATASCIENCE_QUESTIONS.pythonDS[difficulty];
                categoryQuestions.forEach(question => {
                    if (!usedQuestions.includes(question)) {
                        questions.push({ question, expectedTopics: ['python', 'data analysis'], difficulty });
                    }
                });
            } else if (techKey.includes('sql') || techKey.includes('database')) {
                const categoryQuestions = DATASCIENCE_QUESTIONS.sqlDS[difficulty];
                categoryQuestions.forEach(question => {
                    if (!usedQuestions.includes(question)) {
                        questions.push({ question, expectedTopics: ['sql', 'database'], difficulty });
                    }
                });
            } else if (techKey.includes('deep') || techKey.includes('neural') || techKey.includes('tensorflow') || techKey.includes('pytorch')) {
                const categoryQuestions = DATASCIENCE_QUESTIONS.deepLearning[difficulty];
                categoryQuestions.forEach(question => {
                    if (!usedQuestions.includes(question)) {
                        questions.push({ question, expectedTopics: ['deep learning', 'neural networks'], difficulty });
                    }
                });
            }
        });

        const shuffled = questions.sort(() => Math.random() - 0.5);
        return shuffled.slice(0, targetCount);
    };

    if (easyCount > 0) allQuestions.push(...getQuestionsByDifficulty('easy', easyCount));
    if (mediumCount > 0) allQuestions.push(...getQuestionsByDifficulty('medium', mediumCount));
    if (hardCount > 0) allQuestions.push(...getQuestionsByDifficulty('hard', hardCount));

    const randomSeed = Date.now() + Math.random();
    const shuffleWithSeed = (array: any[], seed: number) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor((seed * (i + 1)) % (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            seed = (seed * 9301 + 49297) % 233280;
        }
        return shuffled;
    };

    let finalQuestions = shuffleWithSeed(allQuestions, randomSeed);
    finalQuestions = finalQuestions.sort(() => Math.random() - 0.5);

    return finalQuestions;
}
