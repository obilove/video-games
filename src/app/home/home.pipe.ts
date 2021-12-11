import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'homeIni',
})
export class homeIniPipe implements PipeTransform {
  transform(name: number): any {
    return parseInt((name + '').charAt(0));
  }
}

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, args: any[]): string {
    const limit = args.length > 0 ? parseInt(args[0], 10) : 20;
    const trail = args.length > 1 ? args[1] : '...';
    return value.length > limit ? value.substring(0, limit) + trail : value;
  }
}

@Pipe({
  name: 'personSearch',
})
export class PersonSearchPipe implements PipeTransform {
  transform(games: any[], nameSearch: string, ratingSearch: number) {
    if (games && games.length) {
      return games.filter((item) => {
        if (
          nameSearch &&
          item.name.toLowerCase().indexOf(nameSearch.toLowerCase()) === -1
        ) {
          return false;
        }
        if (
          parseInt((item.rating + '').charAt(0)) !=
            parseInt((ratingSearch + '').charAt(0)) &&
          parseInt((ratingSearch + '').charAt(0)) != 0 &&
          ratingSearch != null
        ) {
          return false;
        }
        return true;
      });
    } else {
      return games;
    }
  }
}
