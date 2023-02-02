import { InjectionToken, FactoryProvider } from '@angular/core';
import { ConfigurationParameters, Configuration } from '../';

export const ConfigurationService = new InjectionToken<Configuration>('ConfigurationService');

export function ConfigurationFactory(config: ConfigurationParameters): Configuration {
  return new Configuration(config);
}

export const ConfigurationProvider: FactoryProvider = {
  provide: ConfigurationService,
  useFactory: ConfigurationFactory,
  deps: [  ]
};