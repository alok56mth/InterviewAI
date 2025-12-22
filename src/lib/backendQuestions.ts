// 450 Backend Interview Questions - Node.js, Express.js, MongoDB, Python, Django, FastAPI
export const BACKEND_QUESTIONS = {
  // Node.js Questions (75)
  nodejs: {
    easy: [
      "What is Node.js and what are its key features?",
      "What is the difference between Node.js and JavaScript?",
      "What is npm and what is package.json?",
      "What is the event loop in Node.js?",
      "What are modules in Node.js?",
      "What is the difference between require() and import?",
      "What is callback in Node.js?",
      "What is the difference between synchronous and asynchronous functions?",
      "What is Buffer in Node.js?",
      "What is the difference between process.nextTick() and setImmediate()?",
      "What is the global object in Node.js?",
      "What is __dirname and __filename in Node.js?",
      "What is the purpose of module.exports?",
      "What are streams in Node.js?",
      "What is the difference between readFile and createReadStream?",
      "What is middleware in Node.js?",
      "What is the purpose of package-lock.json?",
      "What is the difference between dependencies and devDependencies?",
      "What is nodemon and why is it used?",
      "What is the difference between local and global installation of packages?",
      "What is the purpose of .gitignore in Node.js projects?",
      "What is the difference between blocking and non-blocking code?",
      "What is callback hell and how to avoid it?",
      "What is the purpose of util.promisify()?",
      "What is the difference between setTimeout and setInterval?",
    ],
    medium: [
      "How do you handle errors in Node.js?",
      "What are Promises and how do they work in Node.js?",
      "What is async/await and how is it different from Promises?",
      "How do you create a simple HTTP server in Node.js?",
      "What is clustering in Node.js and why is it important?",
      "How do you handle file operations in Node.js?",
      "What is the difference between spawn, exec, and fork?",
      "How do you implement authentication in Node.js?",
      "What is JWT and how do you implement it?",
      "How do you handle environment variables in Node.js?",
      "What is the purpose of cors and how do you implement it?",
      "How do you implement rate limiting in Node.js?",
      "What is the difference between cookie and session?",
      "How do you implement logging in Node.js applications?",
      "What is the purpose of helmet.js?",
      "How do you handle database connections in Node.js?",
      "What is connection pooling and why is it important?",
      "How do you implement caching in Node.js?",
      "What is the difference between PUT and PATCH methods?",
      "How do you implement file upload in Node.js?",
      "What is the purpose of body-parser middleware?",
      "How do you handle validation in Node.js APIs?",
      "What is the difference between development and production environments?",
      "How do you implement testing in Node.js?",
      "What is the purpose of PM2 in Node.js deployment?",
    ],
    hard: [
      "How do you optimize Node.js application performance?",
      "How do you implement microservices architecture with Node.js?",
      "How do you handle memory leaks in Node.js applications?",
      "What is the V8 engine and how does it work with Node.js?",
      "How do you implement real-time communication with WebSockets?",
      "How do you handle large file uploads efficiently?",
      "What is the difference between horizontal and vertical scaling?",
      "How do you implement distributed caching with Redis?",
      "How do you handle database transactions in Node.js?",
      "What is the purpose of load balancing in Node.js applications?",
      "How do you implement API versioning?",
      "How do you handle graceful shutdown in Node.js?",
      "What is the difference between stateful and stateless applications?",
      "How do you implement message queues with Node.js?",
      "How do you handle concurrent requests efficiently?",
      "What is the purpose of reverse proxy in Node.js deployment?",
      "How do you implement database sharding?",
      "How do you handle API security and prevent common attacks?",
      "What is the difference between monolithic and microservices architecture?",
      "How do you implement distributed tracing in Node.js?",
      "How do you handle database migrations in production?",
      "What is the purpose of container orchestration?",
      "How do you implement circuit breaker pattern?",
      "How do you handle eventual consistency in distributed systems?",
      "How do you implement event-driven architecture with Node.js?",
    ]
  },

  // Express.js Questions (75)
  expressjs: {
    easy: [
      "What is Express.js and why is it used?",
      "How do you create a basic Express.js application?",
      "What is routing in Express.js?",
      "What are route parameters and query parameters?",
      "What is middleware in Express.js?",
      "What is the difference between app.use() and app.get()?",
      "How do you serve static files in Express.js?",
      "What is the purpose of express.Router()?",
      "How do you handle POST requests in Express.js?",
      "What is the difference between req and res objects?",
      "How do you parse JSON data in Express.js?",
      "What is the purpose of next() function in middleware?",
      "How do you handle route parameters in Express.js?",
      "What is the difference between app.listen() and server.listen()?",
      "How do you set up basic error handling in Express.js?",
      "What is the purpose of express.json() middleware?",
      "How do you implement basic authentication in Express.js?",
      "What is the difference between GET and POST requests?",
      "How do you handle cookies in Express.js?",
      "What is the purpose of express.urlencoded() middleware?",
      "How do you implement basic logging in Express.js?",
      "What is the difference between middleware and route handlers?",
      "How do you handle multiple route methods for the same path?",
      "What is the purpose of app.all() method?",
      "How do you implement basic session management?",
    ],
    medium: [
      "How do you implement custom middleware in Express.js?",
      "What is error handling middleware and how do you implement it?",
      "How do you implement input validation in Express.js?",
      "What is the purpose of helmet middleware?",
      "How do you implement CORS in Express.js applications?",
      "What is the difference between application-level and router-level middleware?",
      "How do you implement rate limiting in Express.js?",
      "What is the purpose of compression middleware?",
      "How do you handle file uploads in Express.js?",
      "How do you implement JWT authentication in Express.js?",
      "What is the difference between cookie-parser and express-session?",
      "How do you implement API versioning in Express.js?",
      "What is the purpose of morgan middleware for logging?",
      "How do you handle database integration in Express.js?",
      "What is the difference between synchronous and asynchronous middleware?",
      "How do you implement custom error pages in Express.js?",
      "What is the purpose of express-validator?",
      "How do you implement pagination in Express.js APIs?",
      "What is the difference between res.send() and res.json()?",
      "How do you implement caching headers in Express.js?",
      "What is the purpose of express-rate-limit?",
      "How do you handle environment-specific configurations?",
      "What is the difference between res.redirect() and res.render()?",
      "How do you implement request timeout handling?",
      "What is the purpose of body-parser alternatives in modern Express?",
    ],
    hard: [
      "How do you optimize Express.js application performance?",
      "How do you implement advanced security measures in Express.js?",
      "What is the difference between clustering and load balancing?",
      "How do you implement graceful shutdown in Express.js applications?",
      "What is the purpose of reverse proxy with Express.js?",
      "How do you handle memory management in Express.js?",
      "What is the difference between horizontal and vertical scaling strategies?",
      "How do you implement distributed session management?",
      "What is the purpose of health check endpoints?",
      "How do you implement advanced logging and monitoring?",
      "What is the difference between stateless and stateful authentication?",
      "How do you handle database connection pooling?",
      "What is the purpose of circuit breaker pattern in Express.js?",
      "How do you implement API gateway functionality?",
      "What is the difference between microservices and monolithic architecture?",
      "How do you handle distributed tracing in Express.js?",
      "What is the purpose of container orchestration for Express.js apps?",
      "How do you implement advanced caching strategies?",
      "What is the difference between blue-green and rolling deployments?",
      "How do you handle database migrations in production environments?",
      "What is the purpose of service mesh in microservices?",
      "How do you implement event-driven architecture with Express.js?",
      "What is the difference between synchronous and asynchronous communication?",
      "How do you handle eventual consistency in distributed systems?",
      "What is the purpose of message queues in Express.js applications?",
    ]
  },

  // MongoDB Questions (75)
  mongodb: {
    easy: [
      "What is MongoDB and what are its key features?",
      "What is the difference between SQL and NoSQL databases?",
      "What is a document in MongoDB?",
      "What is a collection in MongoDB?",
      "What is BSON and how is it different from JSON?",
      "How do you create a database in MongoDB?",
      "How do you insert documents in MongoDB?",
      "How do you query documents in MongoDB?",
      "What is the _id field in MongoDB?",
      "How do you update documents in MongoDB?",
      "How do you delete documents in MongoDB?",
      "What is the difference between find() and findOne()?",
      "What are the basic data types in MongoDB?",
      "How do you create an index in MongoDB?",
      "What is the purpose of ObjectId in MongoDB?",
      "How do you sort documents in MongoDB?",
      "What is the limit() method in MongoDB?",
      "How do you count documents in MongoDB?",
      "What is the difference between drop() and remove()?",
      "How do you create a collection in MongoDB?",
      "What is the purpose of pretty() method?",
      "How do you check if a database exists in MongoDB?",
      "What is the difference between save() and insert()?",
      "How do you handle arrays in MongoDB documents?",
      "What is the purpose of explain() method?",
    ],
    medium: [
      "What is indexing in MongoDB and why is it important?",
      "How do you implement aggregation in MongoDB?",
      "What is the difference between embedded and referenced documents?",
      "How do you implement pagination in MongoDB?",
      "What are compound indexes and when to use them?",
      "How do you implement text search in MongoDB?",
      "What is the purpose of MongoDB Atlas?",
      "How do you implement data validation in MongoDB?",
      "What is the difference between replica set and sharding?",
      "How do you handle transactions in MongoDB?",
      "What is the purpose of GridFS in MongoDB?",
      "How do you implement geospatial queries in MongoDB?",
      "What is the difference between $lookup and populate?",
      "How do you optimize MongoDB queries?",
      "What is the purpose of MongoDB Compass?",
      "How do you implement backup and restore in MongoDB?",
      "What is the difference between $match and $filter?",
      "How do you handle large datasets in MongoDB?",
      "What is the purpose of change streams in MongoDB?",
      "How do you implement data modeling in MongoDB?",
      "What is the difference between $group and $project?",
      "How do you handle concurrent operations in MongoDB?",
      "What is the purpose of MongoDB profiler?",
      "How do you implement schema design patterns?",
      "What is the difference between $push and $addToSet?",
    ],
    hard: [
      "How do you implement sharding in MongoDB?",
      "What is the difference between horizontal and vertical scaling in MongoDB?",
      "How do you optimize MongoDB performance for large datasets?",
      "What is the purpose of replica sets and how do they work?",
      "How do you implement distributed transactions in MongoDB?",
      "What is the difference between read and write concerns?",
      "How do you handle data consistency in MongoDB clusters?",
      "What is the purpose of MongoDB oplog?",
      "How do you implement advanced aggregation pipelines?",
      "What is the difference between primary and secondary nodes?",
      "How do you handle failover in MongoDB replica sets?",
      "What is the purpose of MongoDB balancer?",
      "How do you implement advanced indexing strategies?",
      "What is the difference between covered and non-covered queries?",
      "How do you handle memory management in MongoDB?",
      "What is the purpose of MongoDB WiredTiger storage engine?",
      "How do you implement advanced security measures?",
      "What is the difference between authentication and authorization?",
      "How do you handle database migrations in MongoDB?",
      "What is the purpose of MongoDB change streams for real-time applications?",
      "How do you implement advanced monitoring and alerting?",
      "What is the difference between ACID and BASE properties?",
      "How do you handle eventual consistency in distributed MongoDB?",
      "What is the purpose of MongoDB time series collections?",
      "How do you implement advanced backup and disaster recovery strategies?",
    ]
  },

  // Python Questions (75)
  python: {
    easy: [
      "What is Python and what are its key features?",
      "What is the difference between Python 2 and Python 3?",
      "What are the basic data types in Python?",
      "What is the difference between list and tuple?",
      "What is a dictionary in Python?",
      "What is the difference between append() and extend()?",
      "What is list comprehension in Python?",
      "What is the difference between == and is operators?",
      "What is the purpose of __init__ method?",
      "What is the difference between local and global variables?",
      "What is exception handling in Python?",
      "What is the purpose of try-except blocks?",
      "What is the difference between break and continue?",
      "What is a lambda function in Python?",
      "What is the purpose of *args and **kwargs?",
      "What is the difference between shallow and deep copy?",
      "What is the purpose of enumerate() function?",
      "What is the difference between range() and xrange()?",
      "What is the purpose of zip() function?",
      "What is the difference between remove() and pop()?",
      "What is string formatting in Python?",
      "What is the purpose of join() method?",
      "What is the difference between split() and partition()?",
      "What is the purpose of map() function?",
      "What is the difference between filter() and reduce()?",
    ],
    medium: [
      "What are decorators in Python and how do they work?",
      "What is the difference between classmethod and staticmethod?",
      "What are generators in Python and how do they work?",
      "What is the purpose of yield keyword?",
      "What is multiple inheritance in Python?",
      "What is the Method Resolution Order (MRO)?",
      "What are context managers in Python?",
      "What is the purpose of __enter__ and __exit__ methods?",
      "What is the difference between __str__ and __repr__?",
      "What are metaclasses in Python?",
      "What is the purpose of property decorator?",
      "What is the difference between instance and class variables?",
      "What is duck typing in Python?",
      "What is the purpose of __slots__?",
      "What is the difference between pickle and json?",
      "What are regular expressions in Python?",
      "What is the purpose of collections module?",
      "What is the difference between threading and multiprocessing?",
      "What is the Global Interpreter Lock (GIL)?",
      "What is the purpose of asyncio in Python?",
      "What is the difference between coroutines and generators?",
      "What is the purpose of virtual environments?",
      "What is the difference between pip and conda?",
      "What is the purpose of requirements.txt?",
      "What is the difference between unittest and pytest?",
    ],
    hard: [
      "How do you optimize Python code performance?",
      "What is the difference between CPython, PyPy, and Jython?",
      "How do you implement design patterns in Python?",
      "What is the purpose of memory profiling in Python?",
      "How do you handle large datasets efficiently in Python?",
      "What is the difference between synchronous and asynchronous programming?",
      "How do you implement concurrent programming in Python?",
      "What is the purpose of Cython for performance optimization?",
      "How do you implement distributed computing with Python?",
      "What is the difference between weak and strong references?",
      "How do you handle memory management in Python?",
      "What is the purpose of garbage collection in Python?",
      "How do you implement custom iterators and iterables?",
      "What is the difference between composition and inheritance?",
      "How do you implement advanced exception handling strategies?",
      "What is the purpose of abstract base classes?",
      "How do you implement thread-safe code in Python?",
      "What is the difference between cooperative and preemptive multitasking?",
      "How do you implement advanced logging and monitoring?",
      "What is the purpose of profiling and benchmarking?",
      "How do you handle database connections and connection pooling?",
      "What is the difference between WSGI and ASGI?",
      "How do you implement advanced security measures?",
      "What is the purpose of containerization for Python applications?",
      "How do you implement CI/CD pipelines for Python projects?",
    ]
  },

  // Django Questions (75)
  django: {
    easy: [
      "What is Django and what are its key features?",
      "What is the MVT pattern in Django?",
      "How do you create a Django project?",
      "What is the difference between project and app in Django?",
      "What is a Django model?",
      "How do you create a model in Django?",
      "What is migration in Django?",
      "How do you create and apply migrations?",
      "What is Django admin and how do you use it?",
      "What is a Django view?",
      "What is the difference between function-based and class-based views?",
      "What is URL routing in Django?",
      "How do you create URL patterns in Django?",
      "What is a Django template?",
      "What is template inheritance in Django?",
      "What is the purpose of settings.py?",
      "What is the difference between DEBUG=True and DEBUG=False?",
      "How do you serve static files in Django?",
      "What is the purpose of manage.py?",
      "How do you create a superuser in Django?",
      "What is the difference between CharField and TextField?",
      "What is the purpose of __str__ method in models?",
      "How do you handle forms in Django?",
      "What is CSRF protection in Django?",
      "What is the purpose of Django ORM?",
    ],
    medium: [
      "How do you implement authentication in Django?",
      "What is the difference between authentication and authorization?",
      "How do you create custom user models in Django?",
      "What is the purpose of Django middleware?",
      "How do you implement custom middleware?",
      "What is the difference between select_related and prefetch_related?",
      "How do you implement pagination in Django?",
      "What is the purpose of Django signals?",
      "How do you handle file uploads in Django?",
      "What is the difference between Model.save() and bulk_create()?",
      "How do you implement caching in Django?",
      "What is the purpose of Django REST framework?",
      "How do you create API endpoints with Django?",
      "What is serialization in Django REST framework?",
      "How do you implement validation in Django forms?",
      "What is the purpose of Django sessions?",
      "How do you handle database transactions in Django?",
      "What is the difference between Q objects and F objects?",
      "How do you implement custom template tags and filters?",
      "What is the purpose of Django management commands?",
      "How do you implement internationalization in Django?",
      "What is the difference between render and redirect?",
      "How do you handle environment variables in Django?",
      "What is the purpose of Django fixtures?",
      "How do you implement testing in Django?",
    ],
    hard: [
      "How do you optimize Django application performance?",
      "What is the difference between database optimization techniques?",
      "How do you implement advanced caching strategies?",
      "What is the purpose of database connection pooling?",
      "How do you handle large file uploads efficiently?",
      "What is the difference between synchronous and asynchronous views?",
      "How do you implement real-time features with Django Channels?",
      "What is the purpose of Celery for background tasks?",
      "How do you implement distributed task queues?",
      "What is the difference between horizontal and vertical scaling?",
      "How do you handle database sharding in Django?",
      "What is the purpose of load balancing for Django applications?",
      "How do you implement advanced security measures?",
      "What is the difference between SQL injection and XSS attacks?",
      "How do you handle database migrations in production?",
      "What is the purpose of Django deployment strategies?",
      "How do you implement monitoring and logging?",
      "What is the difference between Docker and virtual machines?",
      "How do you implement CI/CD pipelines for Django?",
      "What is the purpose of microservices architecture?",
      "How do you handle API versioning in Django?",
      "What is the difference between REST and GraphQL APIs?",
      "How do you implement advanced authentication mechanisms?",
      "What is the purpose of containerization for Django apps?",
      "How do you handle eventual consistency in distributed systems?",
    ]
  },

  // FastAPI Questions (75)
  fastapi: {
    easy: [
      "What is FastAPI and what are its key features?",
      "How do you create a basic FastAPI application?",
      "What is the difference between FastAPI and Flask?",
      "How do you define path parameters in FastAPI?",
      "What are query parameters in FastAPI?",
      "How do you handle request body in FastAPI?",
      "What is Pydantic and how is it used in FastAPI?",
      "How do you create API documentation in FastAPI?",
      "What is the purpose of @app.get() decorator?",
      "How do you handle different HTTP methods in FastAPI?",
      "What is type hinting in FastAPI?",
      "How do you validate request data in FastAPI?",
      "What is the difference between Path and Query?",
      "How do you handle file uploads in FastAPI?",
      "What is the purpose of Response model?",
      "How do you handle errors in FastAPI?",
      "What is the difference between synchronous and asynchronous endpoints?",
      "How do you serve static files in FastAPI?",
      "What is the purpose of status codes in FastAPI?",
      "How do you create custom response models?",
      "What is the difference between POST and PUT methods?",
      "How do you handle cookies in FastAPI?",
      "What is the purpose of Header parameters?",
      "How do you implement basic authentication?",
      "What is the difference between Form and Body?",
    ],
    medium: [
      "How do you implement JWT authentication in FastAPI?",
      "What is dependency injection in FastAPI?",
      "How do you create reusable dependencies?",
      "What is the purpose of middleware in FastAPI?",
      "How do you implement CORS in FastAPI?",
      "What is the difference between BackgroundTasks and Celery?",
      "How do you handle database integration with FastAPI?",
      "What is SQLAlchemy and how do you use it with FastAPI?",
      "How do you implement pagination in FastAPI?",
      "What is the purpose of response models and serialization?",
      "How do you handle validation errors in FastAPI?",
      "What is the difference between Field and Body validation?",
      "How do you implement rate limiting in FastAPI?",
      "What is the purpose of OpenAPI schema generation?",
      "How do you customize API documentation?",
      "What is the difference between sync and async database operations?",
      "How do you implement caching in FastAPI?",
      "What is the purpose of WebSocket support in FastAPI?",
      "How do you handle environment configuration?",
      "What is the difference between testing sync and async endpoints?",
      "How do you implement logging in FastAPI?",
      "What is the purpose of security utilities in FastAPI?",
      "How do you handle large file uploads efficiently?",
      "What is the difference between OAuth2 and JWT?",
      "How do you implement API versioning in FastAPI?",
    ],
    hard: [
      "How do you optimize FastAPI application performance?",
      "What is the difference between ASGI and WSGI servers?",
      "How do you implement advanced authentication and authorization?",
      "What is the purpose of custom middleware for performance monitoring?",
      "How do you handle database connection pooling?",
      "What is the difference between horizontal and vertical scaling strategies?",
      "How do you implement distributed caching with Redis?",
      "What is the purpose of message queues in FastAPI applications?",
      "How do you handle graceful shutdown and health checks?",
      "What is the difference between microservices and monolithic architecture?",
      "How do you implement advanced security measures?",
      "What is the purpose of API gateway patterns?",
      "How do you handle distributed tracing and monitoring?",
      "What is the difference between event-driven and request-response patterns?",
      "How do you implement advanced testing strategies?",
      "What is the purpose of containerization and orchestration?",
      "How do you handle database migrations in production?",
      "What is the difference between blue-green and canary deployments?",
      "How do you implement advanced logging and observability?",
      "What is the purpose of circuit breaker patterns?",
      "How do you handle eventual consistency in distributed systems?",
      "What is the difference between synchronous and asynchronous communication?",
      "How do you implement advanced caching strategies?",
      "What is the purpose of service mesh in microservices?",
      "How do you handle advanced error handling and recovery?",
    ]
  }
};

export function getRandomBackendQuestions(
  technologies: string[],
  experienceLevel: string,
  count: number,
  usedQuestions: string[] = []
): Array<{question: string, expectedTopics: string[], difficulty: 'easy' | 'medium' | 'hard'}> {
  // Define difficulty distribution based on experience level
  const difficultyDistribution = {
    'fresher': { easy: 0.8, medium: 0.15, hard: 0.05 },
    'entry-level': { easy: 0.8, medium: 0.15, hard: 0.05 },
    'junior': { easy: 0.5, medium: 0.4, hard: 0.1 },
    'mid': { easy: 0.2, medium: 0.6, hard: 0.2 },
    'senior': { easy: 0.1, medium: 0.4, hard: 0.5 },
    'lead': { easy: 0.05, medium: 0.25, hard: 0.7 }
  };
  
  const level = experienceLevel.toLowerCase();
  console.log('Experience Level:', level); // Debug log
  const distribution = difficultyDistribution[level as keyof typeof difficultyDistribution] || difficultyDistribution['mid'];
  console.log('Distribution:', distribution); // Debug log
  
  // Calculate question counts for each difficulty
  const easyCount = Math.round(count * distribution.easy);
  const mediumCount = Math.round(count * distribution.medium);
  const hardCount = count - easyCount - mediumCount;
  
  console.log(`Question Distribution for ${level}:`, {
    total: count,
    easy: easyCount,
    medium: mediumCount,
    hard: hardCount
  }); // Debug log
  
  const allQuestions: Array<{question: string, expectedTopics: string[], difficulty: 'easy' | 'medium' | 'hard'}> = [];
  
  // Helper function to get questions by difficulty
  const getQuestionsByDifficulty = (difficulty: 'easy' | 'medium' | 'hard', targetCount: number) => {
    const questions: Array<{question: string, expectedTopics: string[], difficulty: 'easy' | 'medium' | 'hard'}> = [];
    
    technologies.forEach(tech => {
      const techKey = tech.toLowerCase().replace(/\s+/g, '').replace('.', '');
      let questionSet: string[] = [];
      let topics: string[] = [];
      
      if (techKey.includes('node') || techKey.includes('nodejs')) {
        questionSet = BACKEND_QUESTIONS.nodejs[difficulty];
        topics = ['nodejs', 'backend', 'javascript', 'server'];
      } else if (techKey.includes('express')) {
        questionSet = BACKEND_QUESTIONS.expressjs[difficulty];
        topics = ['expressjs', 'nodejs', 'web framework', 'api'];
      } else if (techKey.includes('mongo')) {
        questionSet = BACKEND_QUESTIONS.mongodb[difficulty];
        topics = ['mongodb', 'database', 'nosql', 'document store'];
      } else if (techKey.includes('python')) {
        questionSet = BACKEND_QUESTIONS.python[difficulty];
        topics = ['python', 'programming', 'backend'];
      } else if (techKey.includes('django')) {
        questionSet = BACKEND_QUESTIONS.django[difficulty];
        topics = ['django', 'python', 'web framework', 'mvc'];
      } else if (techKey.includes('fastapi')) {
        questionSet = BACKEND_QUESTIONS.fastapi[difficulty];
        topics = ['fastapi', 'python', 'api', 'async'];
      }
      
      questionSet.forEach(question => {
        if (!usedQuestions.includes(question)) {
          questions.push({
            question,
            expectedTopics: topics,
            difficulty
          });
        }
      });
    });
    
    // Shuffle and return requested count
    const shuffled = questions.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, targetCount);
  };
  
  // Get questions for each difficulty level
  if (easyCount > 0) {
    allQuestions.push(...getQuestionsByDifficulty('easy', easyCount));
  }
  if (mediumCount > 0) {
    allQuestions.push(...getQuestionsByDifficulty('medium', mediumCount));
  }
  if (hardCount > 0) {
    allQuestions.push(...getQuestionsByDifficulty('hard', hardCount));
  }
  
  // Add extra randomization with timestamp-based seed
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
  
  // Multiple shuffles for maximum randomness
  let finalQuestions = shuffleWithSeed(allQuestions, randomSeed);
  finalQuestions = finalQuestions.sort(() => Math.random() - 0.5);
  finalQuestions = shuffleWithSeed(finalQuestions, Date.now());
  
  return finalQuestions;
}