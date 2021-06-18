import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'completedProjects'
})
export class CompletedProjectsPipe implements PipeTransform {
  transform(tasks: any[], ...args: unknown[]): unknown {
    const numberOfCompletedTasks = tasks.filter(task => task.completato === true).length;   
    return `${numberOfCompletedTasks} su ${tasks.length}`;
  }

}
