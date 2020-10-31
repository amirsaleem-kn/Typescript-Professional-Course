abstract class Command {
    abstract commandLine(): string;

    execute() {
        console.log(`Executing command: ${this.commandLine}`);
    }
}

class LinuxCommand extends Command {
    commandLine() {
        return "Hey! command has been executed on Linux";
    }
}

// const command = new Command(); // Error! as abstract classes cannot be instantiated
const linuxCommand = new LinuxCommand();
linuxCommand.execute();
