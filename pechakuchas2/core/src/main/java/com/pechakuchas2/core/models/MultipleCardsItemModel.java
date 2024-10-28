package com.pechakuchas2.core.models;

import lombok.Getter;
import lombok.Setter;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Getter
@Setter
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class MultipleCardsItemModel {

    @ValueMapValue(injectionStrategy=InjectionStrategy.OPTIONAL)
    private String CoverText;

    @ValueMapValue(injectionStrategy=InjectionStrategy.OPTIONAL)
    private String BackdropText;

    @ValueMapValue(injectionStrategy=InjectionStrategy.OPTIONAL)
    private String Description;

}