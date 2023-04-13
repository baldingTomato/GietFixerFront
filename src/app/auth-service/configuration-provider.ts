import { InjectionToken, FactoryProvider } from '@angular/core';
import { Injectable } from '@angular/core';
import { ConfigurationParameters, Configuration } from '../api';

export const ConfigurationService = new InjectionToken<Configuration>('ConfigurationService');