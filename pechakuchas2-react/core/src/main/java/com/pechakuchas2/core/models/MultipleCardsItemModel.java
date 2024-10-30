package com.pechakuchas2.core.models;

import lombok.Getter;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;


@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class MultipleCardsItemModel {

    @ValueMapValue
    @Getter
    private String CoverText;

    @ValueMapValue
    @Getter
    private String BackdropText;

    @ValueMapValue
    @Getter
    private String Description;

}