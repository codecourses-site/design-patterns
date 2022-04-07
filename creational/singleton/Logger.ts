class Logger { 
  private static logger: Logger;

  constructor() {
  }

  public static getInstance(): Logger { 
    if (!this.logger) {
      this.logger = new Logger();
    }
    return this.logger;
  }

  public log(input: any): void { 
    console.log(input);
  }

  public table(input: any): void { 
    console.table(input);
  }
};

const logger = Logger.getInstance();

logger.log('Single Pattern');
logger.table([{ id: 1, name: 'Singleton', status: 'Done' }]);

