import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  getWeatherData(cityName: string): Observable<WeatherData>{
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {
      headers: new HttpHeaders(),
        params: new HttpParams()
        .set('q', 'name')
        .set('units', 'metric')
        .set('mode', 'json')

    })
  }
}
